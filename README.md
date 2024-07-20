# Blog Website

## Overview
This is a blog website created to practice Next.js concepts. Users can create, read, update, and delete blogs. The project currently does not include authentication but it will be added later, and permissions will be restricted to admin users for blog management.

## Features
- **Create Blog:** Users can create blogs using a rich text editor provided by Syncfusion.
- **Read Blog:** A page to view all the published blogs.
- **Update Blog:** Users can update their blogs.
- **Delete Blog:** Users can delete their blogs.

## Technologies Used
- **Frontend:**
  - React
  - Next.js 15
  - Syncfusion Rich Text Editor
- **Backend:**
  - MockAPI.io

## Getting Started

### Prerequisites
- Node.js (>=14.x)
- npm (>=6.x) or yarn (>=1.x)

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/akinurrahman/blog-webapp
    cd blog-webapp
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Configuration
1. **Syncfusion:** Ensure you have the necessary Syncfusion licenses and have configured the editor correctly in your project. You can add the syncfution licence key in env file 
    ```env
    NEXT_PUBLIC_SYNCFUSION_LICENSE_KEY=YOUR_KEY_HERE
    ```

## Folder Structure
`blog-website/
├── public/
├── src/
│ ├── components/
│ ├── pages/
│ ├── styles/
│ └── utils/
├── .env
├── .gitignore
├── package.json
├── README.md
└── next.config.js`


## Usage
- **Create Blog:** Navigate to the "Create Blog" page and use the Syncfusion editor to write and publish your blog.
- **Read Blogs:** Visit the "Blogs" page to see all published blogs.
- **Update Blog:** On the "Blogs" page, click on the blog you want to edit and make necessary changes.
- **Delete Blog:** On the "Blogs" page, click on the delete button next to the blog you want to remove.

## Future Improvements
- Add user authentication.
- Restrict blog creation, updating, and deletion to admin users only.
- Enhance the user interface for a better user experience.
- Add more features like comments, tags, and categories for blogs.

## Contributing
Contributions are welcome! Please create an issue first to discuss what you would like to change.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements
- [Syncfusion](https://www.syncfusion.com/)
- [MockAPI.io](https://mockapi.io/)
- [Next.js](https://nextjs.org/)
