# Use the official Node.js  16 as a parent image
FROM node:18.17.0

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install any needed packages specified in package.json
RUN yarn install --frozen-lockfile

# Bundle app source
COPY . .


ENV NEXT_PUBLIC_GREENFLAG_API="https://greenflagapis.azurewebsites.net/api"
ENV NEXT_PUBLIC_GOOGLE_MAP_KEY="AIzaSyBLJh9-kU_cWz7VwwdyxUfZDTlkLcyB1EY"

# Build the Next.js app
RUN yarn build

# Expose the port the app runs in
EXPOSE   3000





# The command to start the app
CMD ["yarn", "start"]