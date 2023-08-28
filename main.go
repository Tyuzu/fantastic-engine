package main
import (
	"html/template"
	"net/http"
  	"log"
	"fmt"
	
    "github.com/gorilla/mux"
)

const PORT = ":6000"
var tmpl = template.Must(template.ParseGlob("*.html"))

func main() {
	HandleRoutes()
	return
}

func HandleRoutes() {
	router := mux.NewRouter()
	router.HandleFunc("/", Index)
	router.HandleFunc("/N4A0ecI", Index)

	router.PathPrefix("/desktop-assets/").Handler(http.StripPrefix("/desktop-assets/", http.FileServer(http.Dir("./desktop-assets"))))
	
	log.Println("Starting server on ", PORT)
	err := http.ListenAndServe(PORT, router)
 	if err != nil {
		log.Fatal("error starting http server : ", router)
 	}
}

func Index(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.URL.Path)
    tmpl.ExecuteTemplate(w,"idx.html",nil)
}

