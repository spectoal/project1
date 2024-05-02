 <h1><a href="/blog"> < </a></h1>

<div style="text-align: right;">
    <h1><a href="/index">HOME</a></h1>
</div>

# Blog Post 3
## _Creating a SSG- Static Site Generator_
--- 
[**SSG**] or static site generators is a tool used to generate a static website from various data sources. A SSG pre-builds HTML files and deals with converting raw data into a complete site with HTML, CSS and JavaScript with templates that are used for consistant styling. It quickly loads and provides a faster browsing experience. The maintenance is very easy and orginizes content well without it being too complex. 


##### Prerequisites
- Basic knowledge of CLI/Linux [commands] and program
- Basic knowledge of [MarkDown]
- Basic HTML and CSS and JavaScript
- Custom Domain Name (Id suggest [Porkbun])
- Digital Ocean account
---
#### _**Sign up for Digital Ocean**_

Create a [Digital Ocean] account and walk thorugh the [tour] to get comfortable with the interface 


---
#### _**Creating Digital Ocean Droplet**_

**Step 1:** Start by creating a new droplet on your Digital Ocean account 

- Hit the green **CREATE** button at the top right 
- Click **DROPLETS**

**Step 2:** Follow the next steps in setting up the Droplet

- Choose your region
- **UBUNTU** verson **22.10x64**
- Choose the size, I suggest the **BASIC**
- Then choose a way to authenticate, I suggest the **PASSWORD**
- Finally the little details **1** dropplet
- A **HOSTNAME** that is unique and you will remember it by
- Then click **CREATE DROPLET** and wait for the progress bar to finish
- Once the Droplet is created you can view the IP address

---
#### _**Creating the initial server**_

Follow the beginning steps on setting up the [Initial Server with Ubuntu] 


---
#### _**Install the Apache Web Server**_

**Step 1:** Update then install apache
```sh 
sudo apt update
```

```sh
sudo apt install apache2
```

**Step 2:** Adjust the firewall by allowing different aspects and check the status
```sh
sudo ufw allow 'Apache'
```

```sh
sudo ufw status
```

**Step 3:** You can now start checking and running the web server
```sh
sudo systemctl status apache2
```
then you will want to get the server IP, you can get that by entering this command
```sh
curl -4 icanhazip.com
```
and after typing **http://(the_ip)** into your browser you should have it up and running and see the defult "Apache2 Default Page"

There are a couple commands that you can use to manage the server
- STOP `sudo systemctl stop apache2`
- START `sudo systemctl start apache2`
- RESTART `sudo systemctl restart apache2`
- RELOAD `sudo systemctl reload apache2`
- DISABLE `sudo systemctl disable apache2`
- ENABLE `sudo system enable apache2`
 
**Step 4:** Next you can create a virtual host, and set up a domain with your purchased domain

_you can create a directory for your domain and assign ownership to it_
```sh
sudo mkdir /var/www/(*your_domain*)
sudo chown -R $USER:$USER /var/www/(*your_domain*)
sudo chmod -R 755 /var/www/(*your_domain*)
```

_next you can create an index page and add base code to it_
```sh
sudo nano /var/www/(*your_domain*)/index.html
```

```sh
<html>
    <head>
        <title>Welcome to (*your_domain*)!</title>
    </head>
    <body>
        <h1>Success! The (*your_domain*) virtual host is working!</h1>
    </body>
</html>    
```

_now create a config for you page rather then modify the default one_
```sh
sudo nano /etc/apache2/sites-available/(*your_domain*).conf
```

```sh
<VirtualHost *:80>
    ServerAdmin webmaster@localhost
    ServerName your_domain
    ServerAlias www.your_domain
    DocumentRoot /var/www/your_domain
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```
_now you can enable the file, disable the default, test for config errors and implement the changes_
```sh
sudo a2ensite (*your_domain*).conf
```

```sh
sudo a2dissite 000-default.conf
```

```sh
sudo apache2ctl configtest
```

```sh
sudo systemctl restart apache2
```

Now using the **http://(*your_domain*)** you should be able to see your HTML changes on the web!


---
#### _**How it can be used**_

SSG and creating a droplet in Digital Ocean can be useful for many different reasons. It provides an easy way to host your own website with high preformance and fast response time. It is one of the best ways to create and keep tab on a site you are creating and plan to deploy. 


---
[links]: links...

[**SSG**]: https://www.storyblok.com/mp/static-sites-vs-dynamic-sites?utm_source=google&utm_medium=cpc&utm_campaign=PBA_DSA_Headless&gad_source=1&gclid=EAIaIQobChMIpvyU3MXthQMVFWVHAR20VwGXEAAYASAAEgLlxvD_BwE 

[**boilerplates**]: https://www.freecodecamp.org/news/whats-boilerplate-and-why-do-we-use-it-let-s-check-out-the-coding-style-guide-ac2b6c814ee7/#:~:text=In%20Information%20Technology%2C%20a%20boilerplate,make%20abundant%20use%20of%20boilerplates. 

[commands]: https://www.w3schools.com/whatis/whatis_cli.asp 

[MarkDown]: https://www.markdownguide.org/getting-started/

[Porkbun]: https://porkbun.com

[Digital Ocean]: https://www.digitalocean.com 

[tour]: https://www.digitalocean.com/product-tours/droplets 

[Initial Server with Ubuntu]: https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu