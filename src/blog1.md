<h1><a href="/blog"> < </a></h1>

<div style="text-align: right;">
    <h1><a href="/index">HOME</a></h1>
</div>

# Blog Post 1    
## _CLI Script_
--- 
[**CLI**], command-line interface, is code that takes text inputs to execute an operating system in a terminal or command prompt rather than other interfaces. You can use it to run programs, manage, and navigate files. One of the many ways this can be used is to create [**boilerplates**] for starting projects, and there are many advantages to doing it this way. Efficiency, flexibility, and consistency are the biggest benifits to creating something this way. You are able to quickly generate the basic structure of the project without having to manually create each directory and file. With the basic script you can customize it based on the project requirements and change it up as needed for new projects. 

##### Prerequisites
- CLI tools installed 
- Basic knowledge of CLI/Linux [commands]
- Basic knowledge of [Shell Scripting]
- Basic HTML and CSS
---
#### _**Install Linux Bash Shell**_

Have the Linux tools [installed] to use the command prompt terminal


---
#### _**Boilerplate Script**_

**Step 1:** Start by adding lines to create a new project and open the project
```sh
#!/bin/bash

mkdir project
cd project
```

**Step 2:** Create subdirectories inside the project to work in seperatly and open the `site`directory, then create more subdirectories in the `site` and **cd** back out to the main project directory
```sh
mkdir images scripts styles site 
cd site 

mkdir pages posts comments
cd..
```

**Step 3:** Create an index file in the `project` directory and a styles file inside the `style` subdirectory 
```sh
touch index.html
touch styles/styles.css
```

**Step 4:** Now you are going to create the content for the page, first line by line add the basic heading using the command **`echo`** into the file you want to add it to, we will be adding it to the `index` file
```sh
echo "<!DOCTYPE html>" >> index.html
echo "<html>" >> index.html
echo "  <head> " >> index.html
echo "      <meta charset=\"utf-8\"> " >> index.html
echo "      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> " >> index.html
echo "      <link rel=\"stylesheet\" href=\"styles/styles.css\"> " >> index.html
echo "  </head> " >> index.html
echo "  <body> " >> index.html

```

**Step 5:** Once you have hit the body, you can now start to add the content that you will see on the page
```sh
(YOUR HTML CODE HERE...)

echo " <body>" >> <h1> HELLO WORLD, THIS IS MY SITE <h1>

echo "  </body>" >> index.html
echo "</html>" >> index.html
```

**Step 6:** Once you have the HTML aspect writen you can add CSS style to the `styles` file
```sh 
(CSS CODE HERE...)
echo "------" >> styles/styles.css
```

Now you have created a basic boilerplate for a project and some added HTML and CSS to the page

---
#### _**How it can be used**_

CLI and bash shell boilerplate is a great way to do a repetitive coding task to save time and a great way to learn about Unix-based systems. It's a more efficient, effective, and versatile system of doing it and can be put to great use.


---
[links]: links...

[**CLI**]: https://www.techtarget.com/searchwindowsserver/definition/command-line-interface-CLI 

[**boilerplates**]: https://www.freecodecamp.org/news/whats-boilerplate-and-why-do-we-use-it-let-s-check-out-the-coding-style-guide-ac2b6c814ee7/#:~:text=In%20Information%20Technology%2C%20a%20boilerplate,make%20abundant%20use%20of%20boilerplates. 

[commands]: https://www.w3schools.com/whatis/whatis_cli.asp 

[Shell Scripting]: https://www.howtogeek.com/67469/the-beginners-guide-to-shell-scripting-the-basics/ 

[installed]: https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/