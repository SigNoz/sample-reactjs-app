# Sample React App

This is a sample React application that fetches data from multiple public APIs and implements OpenTelemetry tracing. You can choose between the TypeScript or JavaScript version of the app.

## Running the TypeScript Version

1. **Navigate to the TypeScript directory**:
   ```bash
   cd typescript
   ```

2. **Install dependencies**:
   Run the following command to install the required dependencies:
   ```bash
   npm install
   ```

3. **Configure OpenTelemetry**:
   - Open the `src/tracing.ts` file.
   - Replace `service_name`, `region`, and the `signoz-access-token` (or your ingestion key) in the `OTLPTraceExporter` configuration.

4. **Start the development server**:
   Run the following command to start the application:
   ```bash
   npm run start
   ```

5. **Access the app**:
   The app should now be running on `http://localhost:3000`.

## Running the JavaScript Version

1. **Navigate to the JavaScript directory**:
   ```bash
   cd javascript
   ```

2. **Install dependencies**:
   Run the following command to install the required dependencies:
   ```bash
   npm install
   ```

3. **Configure OpenTelemetry**:
   - Open the `src/tracing.js` file.
   - Replace `service_name`, `region`, and the `signoz-access-token` (or your ingestion key) in the `OTLPTraceExporter` configuration.

4. **Start the development server**:
   Run the following command to start the application:
   ```bash
   npm run start
   ```

5. **Access the app**:
   The app should now be running on `http://localhost:3000`.

## Summary

- For the **TypeScript version**, navigate to the `typescript` folder, install dependencies, configure the tracing, and run `npm run start`.
- For the **JavaScript version**, navigate to the `javascript` folder, install dependencies, configure the tracing, and run `npm run start`.

Both versions are designed to fetch data from various public APIs and display the results on the home page while sending traces to a backend (e.g., Signoz) using OpenTelemetry.

Happy coding! 🚀
