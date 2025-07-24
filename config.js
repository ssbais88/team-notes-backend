const dotenv = require("dotenv");
const yup = require("yup");

dotenv.config();

// Define the validation schema
const envSchema = yup
  .object({
    PORT: yup.number().default(5000),
    MONGO_URI: yup
      .string()
      .required("MONGO_URI is a required environment variable"),
  })
  .noUnknown(true, "Unknown environment variables are not allowed");

// Validate the environment variables
let env;
try {
  env = envSchema.validateSync(process.env, { abortEarly: false });
} catch (error) {
  console.error("❌ Environment validation error:");
  error.errors.forEach((err) => console.error(` - ${err}`));
  process.exit(1); // Exit the process if validation fails
}

module.exports = {
  PORT: env.PORT,
  MONGO_URI: env.MONGO_URI,
};
