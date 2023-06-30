# Nadezhda Rachkova 
![avatar](https://avatars.githubusercontent.com/u/86152903?v=4)


### Contacts
+ *Email:* nadin21dir@gmail.com
+ *GitHub:* [nadin21](https://github.com/Nadin21 "GitHub")
+ *Telegram:* [Nadin21dir](https://t.me/Nadin21dir "Telegram")
+ *Discord:* nadin21dir

*****

### About me

I started working as a content manager, then became a web programmer.
Quit due to burnout. To the course "JavaScript/Front-end Stage0" signed up so that I don't forget what I know and learn something new.

*****

### Skills
+ CMS: WordPress, ModX, Bitrix, Joomla, Opencart, Tilda
+ PHP
+ HTML
+ CSS
+ Figma, Photoshop (for web development)
+ MySQL
+ JavaScript (Basic)

*****

### Code example

**Task:** _Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them._

_Example:_

_Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"_
_Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"_

**Solution:**

```
String.prototype.toJadenCase = function () {
  let array = this.split(" ");  
  let newArray = array.map(item=>item[0].toUpperCase()+item.slice(1));
  return newArray.join(" ");
};
```

*****