# ivanisekeev.com
[![Netlify Status](https://api.netlify.com/api/v1/badges/3ecd1eae-1e2e-49a2-9cde-71974a57f30c/deploy-status)](https://app.netlify.com/sites/ivanisekeev/deploys)

## Usage

### Development

Just run and visit https://localhost:8412

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.

### Deploy on Netlify

Go to [Netlify](https://app.netlify.com/start) and select your clone, `OK` along the way, and your App will be live in a minute.

### Docker Production Build

First, build the vitesse image by opening the terminal in the project's root directory.

```bash
docker buildx build . -t vitesse:latest
```

Run the image and specify port mapping with the `-p` flag.

```bash
docker run --rm -it -p 8080:80 vitesse:latest
```
