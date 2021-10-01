// To create React app im aws Amplify
npx create-react-app amplifyapp
cd amplifyapp
npm start

// To configure React amplify
amplify configure

? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: build
? Build Command:  npm run-script build
? Start Command: npm run-script start
? Do you plan on modifying this backend? Y

// To view your Amplify project in the dashboard
amplify console

// Tocreateauthention service with Amplify CLI
amplify add auth

? Do you want to use the default authentication and security configuration? Default configuration
? How do you want users to be able to sign in? Username
? Do you want to configure advanced settings? No, I am done.

// To deploy authentication service in Amplify
amplify push --y

//To run the app to see the new Authentication flow protecting the app
npm start

// To configure the Amplify build process to add the backend as part of the continuous deployment workflow
amplify console

// To Add a GraphQL API to the React app in amplify
amplify add api

? Please select from one of the below mentioned services: GraphQL
? Provide API name: notesapp
? Choose the default authorization type for the API: API Key
? Enter a description for the API key: demo
? After how many days from now the API key should expire: 7 (or your preferred expiration)
? Do you want to configure advanced settings for the GraphQL API: No, I am done.
? Do you have an annotated GraphQL schema?  No
? Do you want a guided schema creation?  Yes
? What best describes your project: Single object with fields
? Do you want to edit the schema now? Yes

// To deploy API in Amplify
amplify push --y

amplify console api

> Choose GraphQL

amplify console

// To run app so far
npm start

// To create the storage service with amplify
amplify add storage

? Please select from one of the below mentioned services: Content
? Please provide a friendly name for your resource that will be used to label this category in the project: imagestorage
? Please provide bucket name: <your-unique-bucket-name>
? Who should have access: Auth users only
? What kind of access do you want for Authenticated users? create, read, update, delete
? Do you want to add a Lambda Trigger for your S3 Bucket? N

// To deploy storage service
amplify push --y

// To run app to complete the imlimentation
npm start