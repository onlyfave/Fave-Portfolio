# 🌐 Fave-Portfolio

Welcome to my personal portfolio website! This project showcases my skills, experience, and projects as a DevOps and Cloud Engineer.

## 🚀 Live Demo
Check out the deployed version here:
[http://http://35.170.202.88](http:http://35.170.202.88)

## 📌 Features
- Modern UI/UX with Next.js
- Fully responsive design
- Interactive animations
- Dynamic project showcase
- Contact form

## 🛠️ Tech Stack
- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Node.js (for API handling)
- **Deployment**: AWS EC2, Apache2, PM2

## 🏗️ Installation
To run this project locally:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/onlyfave/Fave-Portfolio.git
cd Fave-Portfolio
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run the Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser.

## 🚀 Deployment
### 1️⃣ Pull Latest Changes
```bash
git pull origin main  # Change 'main' to your branch if different
```

### 2️⃣ Install Dependencies & Build
```bash
npm install
npm run build
```

### 3️⃣ Restart Server with PM2
```bash
pm2 restart nextjs-app
```

## 🔄 Automating Deployment with GitHub Webhooks
To enable auto-deployment on push, follow these steps:
1. Configure a webhook on GitHub pointing to `http://your-ec2-public-ip:9000/github-webhook`.
2. Set up a webhook listener on your EC2 instance (See `webhook.js`).
3. Use `PM2` to keep it running: `pm2 start webhook.js --name "webhook-listener"`.

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).

## 📬 Contact
For questions or collaboration, reach out via:
- **LinkedIn**: [your-profile-link](https://linkedin.com/in/your-profile)
- **Email**: onyenekeflavour@gmail.com


