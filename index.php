<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Front-end - MTDb</title>
</head>
<body>
<div id="app">
    <header>
      <div class="navbar navbar-dark bg-dark box-shadow">
        <div class="container d-flex justify-content-between">
          <a href="#" class="navbar-brand d-flex align-items-center">
            <strong class="h2">Front-end - MTDb</strong>
          </a>

          <div class="col-auto">
            <div class="input-group">
                <div class="input-group-prepend">
                    <div class="input-group-text">@</div>
                </div>
                <input type="text" class="form-control" placeholder="Busca" v-model="search">
              </div>
          </div>
          <div class="col-auto" id="select">
            <select class="form-control" @change="loadGenero($event);">
                <option>Gênero</option>
                <option v-bind:value="genero.id" v-for="genero in generos">{{ genero.name }}</option>
            </select>
          </div>
        </div>
      </div>
    </header>

    <main role="main">
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row">
              
            <div class="col-md-4 d-flex" v-for="filme in info" v-if="search == '' || filme.title.toLowerCase() == search.toLowerCase()">
                <div class="card mb-4 box-shadow">
                  <img class="card-img-top" :src="getImagem(filme.poster_path)">
                  <div class="card-body d-flex flex-column">
                    <div class="card-text mb-3">
                        <span class="badge badge-pill badge-light mr-2" v-for="genero in filme.genre_ids">{{genero}}</span>
                    </div>

                    <p class="card-title h3">{{filme.title}}</p>
                    <p class="card-text">Data de Lançamento: {{formatData(filme.release_date)}}</p>
                    <p class="card-text">{{filme.overview}}</p>
                    <a :href="'filme/?id='+filme.id" class="btn btn-block btn-dark text-white align-self-end mt-auto">Mais informações</a>                      
                  </div>
                </div>
              </div>

          </div>
        </div>
      </div>
    </main>
</div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/moment@2.29.1/moment.js"></script>
    <script src="js/index.js"></script>
</html>