## Angular on Rails

`home_library` is a Rails application, and `home-library` is an Angular app.

Run Rails' server

```shell
cd home_library
rails s
```

and Angular's development server.

```shell
cd ../home-library
ng serve
```

Now visit `http://localhost:4200` on your browser. You'll see the titles of books passed from Rails app in that popular Angular demo app.
