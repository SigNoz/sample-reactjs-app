import {
    defaultResource,
    resourceFromAttributes,
  } from '@opentelemetry/resources';
  import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
  import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-base';
  import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
  import { ZoneContextManager } from '@opentelemetry/context-zone';
  import { registerInstrumentations } from '@opentelemetry/instrumentation';
  import { getWebAutoInstrumentations } from '@opentelemetry/auto-instrumentations-web';
  
  // Define resource and service attributes
  const resource = defaultResource().merge(
    resourceFromAttributes({
      'service.name': '<service_name>',
      'service.version': '0.1.0',
    })
  );
  
  // Set up the OTLP trace exporter
  const exporter = new OTLPTraceExporter({
    url: 'https://ingest.<region>.signoz.cloud:443/v1/traces',
    headers: {
      'signoz-access-token': '<your-ingestion-key>',
    },
  });
  
  // Set up the span processor
  const processor = new BatchSpanProcessor(exporter);
  
  // Create and configure the WebTracerProvider
  const provider = new WebTracerProvider({
    resource: resource,
    spanProcessors: [processor], // Add the span processor here
  });
  
  // Register the tracer provider with the context manager
  provider.register({
    contextManager: new ZoneContextManager(),
  });
  
  // Set up automatic instrumentation for web APIs
  registerInstrumentations({
    instrumentations: [
      getWebAutoInstrumentations({
        '@opentelemetry/instrumentation-xml-http-request': {
          propagateTraceHeaderCorsUrls: [
            /.+/g, // Regex to match your backend URLs
          ],
        },
        '@opentelemetry/instrumentation-fetch': {
          propagateTraceHeaderCorsUrls: [
            /.+/g, // Regex to match your backend URLs
          ],
        },
      }),
    ],
  });
  