<h1><a href="/blog"> < </a></h1>

<div style="text-align: right;">
    <h1><a href="/index">HOME</a></h1>
</div>

# Blog Post 2
## _Framework_
---
[**11ty**] is a static site generator that is known for simplicity, flexability, and speed; aiding in a finer control over the website. It is minimalistic, making it easy to set up and doesn't have a specific folder/file structure, without a need for server-side processing resulting in a faster page load. [**TailwindCSS**] is a CSS framework that has built-in classes to utilize without having to write custom CSS. This helps developers to build efficient, responsive and visually appealing interfaces with less effort. 

11ty and Tailwind are easy to set up and once you have it installed, it is very easy to use, I am going to help you through installing and setting up the basic framework page for 11ty. 

##### Prerequisites
- Basic HTML and CSS knowledge
- [Node.js] installed 
- Text editor (e.g. Visual Studios Code)
---

#### _**Steps to set up**_

**Step 1:** Set up a new 11ty project  

Create a new directory for the project and get to the terminal
```sh
mkdir my-11ty-project
cd my-11ty-project
```

Initialize a new npm project 
```sh
npm init -y
```

Install 11ty
```sh
npm i -D @11ty/eleventy 
```

Then create the rest of the files needed for the project
>index.html
>eleventy.js

[space]: SPACE
 
**Step 2:** Installing TailwindCSS

Initialize it
```sh
npm init -y
```

Install TailwindCSS
```sh
npm i tailwindcss
```

Create a source folder with the _styles.css_ file in it and add the following components 
```sh
@tailwind base;
@tailwind components;
@tailwind utilities
```

Link the _styles.css_ to the HTML file
```sh
<link href="styles.css" rel="stylesheet">
```

Now thats its installed, you can start to create the page using its utility classes.


---
#### _**Creating a Layout**_

**Step 1:** In the `my-11ty-project` create a folder `src` , then inside the `src` create the `index.html` file
>the `src` folder will act as a source directory where most of the files will be created in

**Step 2:** Create an `_includes` file in the `src` folder

**Step 3:** Create a `.eleventy.js` file in the `my-11ty-project` 

> This will be the configuration file, containing the code for how you want your 11ty structure to work, add the following lines of code...

```sh
module.exports = function(eleventyConfig) {
    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: '_site',
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    };
}
```
**Step 4:** In the `package.json` file under **_"scripts": {}_** create a "start" command
```sh
"start": "npx eleventy --serve",
```


**Step 5:** Get started with the normal document headers

- add something simple to the body like 
```sh
<h1> Hello World</h1>
```

**Step 6:** Once somethig has been added to the body, run the code using the start command 
```sh
npm start
```
After it runs there will be a Local host link 

    SERVER AT    **http://localhost:8080/**    

Copy and paste that into your browser and you will have the basic creation of a page with your text "Hello World".

**Step 7:** Under the `_includes` folder, create another folder `layout` and inside that you will create a `base.html`. Take the basic HTML heading and paste that into the `base.html` file. This base file will have a content change in the **_title_** and **_body_** 
```sh
<title>{{title}}</title>
```
```sh
<body>
    {{content | safe }}
</body>    
```
>This is created so we can pass different titles and body into the header code for different pages

The `index.html` file will now only consist of the header that we added earlier, with added code to create the layout we want 
```sh
---
layout: layouts/base.html
title: "My" 11ty Page"
---

<h1>Hello World</h1>
```

**Step 8:** We can now create another page using that uses that layout, under the `src` create another page `second.html` and add the layout code
```sh
---
layout: layouts/base.html
title: Second Page
---

<h1> This is the {{title}}</h1>
```
>We can use the templates to put in the "Second Page" onto the page instead of typing it out

**Step 9:** Now to make it so we can access the second page, we will add a link to the **_second page_** on the `index.html` file
```sh
<a href="/second">Second Page</a>
```
And on the first page there should be a link to access the second page


---
#### _**Pages Created**_
Now you have created two pages with a link to get to the second only using HTML, able to add what ever you want to them. The next steps would be to start creating a CSS style to it making it look nicer and visually appealing. But now you know the ease in 11ty and the way to create your first pages. 

---
[links]: links...

[**TailwindCSS**]: https://www.geeksforgeeks.org/introduction-to-tailwind-css/ 
[**11ty**]: https://www.sanity.io/glossary/eleventy#:~:text=Eleventy%2C%20often%20referred%20to%20as,grained%20control%20over%20their%20websites.

[Node.js]: https://www.freecodecamp.org/news/what-exactly-is-node-js-ae36e97449f5/ 