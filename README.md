## API Tweteroo

API Tweteroo is the backend without a database for Tweteroo, which store and provides users information and tweets. With Tweteroo you can share your thoughts with your friends while your data will not be saved.
Below are the implemented features:

- Sign Up (with login)
- Post tweets
- Get tweets
- Get user tweets
- Get page of tweets
- tests will be implemented soon

## Endpoints

<details>
    <summary>
        <strong style="color:green;">POST</strong> /sign-up
    </summary>
send body request like this:

```json
{
  "username": "joe",
  "avatar": "https://avatar.jpg"
}
```

- it returns status <strong style="color:green;">201</strong> for success

- avatar must be an url that end with jpg|jpeg|png|gif

- it returns status <strong style="color:purple;">400</strong> for any other issue</li>

</details>
<details>
    <summary>
        <strong style="color:green;">POST</strong> /tweets
    </summary>
send body request like this:

```json
{
  "username": "joe",
  "tweet": "i love coffee"
}
```

- it returns status <strong style="color:green;">201</strong> for success

- it returns status <strong style="color:purple;">400</strong> for any other issue</li>

</details>
<details>
    <summary>
        <strong style="color:orange;">GET</strong> /tweets
    </summary>
- it returns an array like this:

```json
[
  {
    "username": "bobesponja",
    "avatar": "https://spongebob.jpg",
    "tweet": "i love coffe"
  }
  {
    "username": "patrik",
    "avatar": "https://patrik.jpeg",
    "tweet": "i love chocolate"
  }
]
```

- you can get more tweets with paging like this:

GET /tweets?page=x

</details>
<details>
    <summary>
        <strong style="color:orange;">GET</strong> /tweets/USERNAME
    </summary>
- it returns an array like this:

```json
[
  {
    "username": "USENAME",
    "avatar": "https://USENAME.jpg",
    "tweet": "i love coffe"
  }
  {
    "username": "USENAME",
    "avatar": "https://USENAME.jpg",
    "tweet": "i love chocolate"
  }
]
```
</details>
## Technologies

<a title="JavaScript" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> 
</a>
<a title="Node JS" href="https://nodejs.org" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> 
</a>
<a title="Express JS" href="https://expressjs.com/" target="_blank" rel="noreferrer"> 
    <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" alt="expressjs" width="40" height="40"/> 
</a>

## How to run (npm needed)

1. Clone this repository
2. Install dependencies

```bash
npm i
```

3. Run the project with

```bash
npm run start
```

4. Run the project in development mode (nodemon)

```bash
npm run start:dev
```
