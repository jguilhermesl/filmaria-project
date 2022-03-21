# App Filmaria

<!---Esses são exemplos. Veja https://shields.io para outras pessoas ou para personalizar este conjunto de escudos. Você pode querer incluir dependências, status do projeto e
 informações de licença aqui--->

<img src="./src/assets/video.gif" alt="Project App Filmaria">

> Movie catalog app.

### Aplication link

Link: <a>http://jgsl-filmaria.netlify.app</a>

### Adjustments and improvements

- [x] Header component
- [x] Page Home 
- [x] Page Filmes
- [x] Page favoritos
- [x] Routes with react router dom 
- [x] Api consumption with axios
- [x] JSX
- [x] Stylization with CSS
- [x] Use the react toastify library
- [ ] Responsiveness

### How project works

The user accesses Home and has a list of movies that can be accessed individually after clicking the 'Access' button. The visitor will be redirected to the 'Movie' page, with the synopsis, image and name of the chosen movie.
The user after accessing a movie can save that movie in his favorites list.
To see your favorites list, just access the Header, clicking on the 'Favorites' section, where the user can delete the movie and see details.

### How it was developed

The App was developed with React, using components, routes and pages.
The header was designed as a fixed component on all pages.
The movie listing comes after a 'Subject Programmer' API is consumed by Axios and listed with the useEffect hook once the page launches or reloads.
The user after accessing a movie individually is redirected to another route, these routes and links were introduced with React Router Dom.
After the user has bookmarked the movie, he will have a new array introduced in his LocalStorage, where all the movies he has bookmarked are stored.
I also used a library called React Toastify for better performance and 'alert' styling.
## 🤝 Collaborator

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="./src/assets/gui-foto.png" width="100px;" alt="Foto do João Guilherme no GitHub"/><br>
        <sub>
          <b>João Guilherme</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## 👨‍💻 Technologies
Technologies used in the project:

<img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
