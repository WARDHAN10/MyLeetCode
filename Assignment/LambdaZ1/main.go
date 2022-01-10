package main

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/alexbrainman/odbc"
)

func main() {
	db, err := sql.Open("odbc", "DSN=redshift-cluster-1.ctz9p5kna8g0.us-east-2.redshift.amazonaws.com:5439/dev")
	// "DSN=Driver={driver};Server=redshift-cluster-1.ctz9p5kna8g0.us-east-2.redshift.amazonaws.com:5439/dev;Database=dev;UID=harshwardhan;PWD=Harsh123;Port=5439")
	if err != nil {
		log.Fatal(err)
	}
	// Driver={Amazon Redshift (x64)}; Server=redshift-cluster-1.ctz9p5kna8g0.us-east-2.redshift.amazonaws.com; Database=dev
	var (
		daterep string
	)

	rows, err := db.Query("SELECT daterep FROM 'dev'.'public'.'newr'")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()
	for rows.Next() {
		err := rows.Scan(&daterep)
		if err != nil {
			log.Fatal(err)
		}
		fmt.Println(daterep)
	}
	err = rows.Err()
	if err != nil {
		log.Fatal(err)
	}

	defer db.Close()
}

// import (
// 	"database/sql"
// 	"fmt"
// 	"log"

// 	_ "github.com/lib/pq"
// )

// func MakeRedshfitConnection(username, password, host, port, dbName string) (*sql.DB, error) {

// 	url := fmt.Sprintf("sslmode=require user=%v password=%v host=%v port=%v dbname=%v",
// 		username,
// 		password,
// 		host,
// 		port,
// 		dbName)

// 	var err error
// 	var db *sql.DB
// 	db, err = sql.Open("postgres", url)

// 	if err != nil {
// 		fmt.Println(err)
// 	}

// 	if err = db.Ping(); err != nil {
// 		fmt.Errorf("redshift ping error : (%v)", err)
// 	}
// 	return db, nil
// }

// func main() {

// 	username := "Harshwardhan"
// 	password := "Harsh123"
// 	host := "redshift-cluster-1.ctz9p5kna8g0.us-east-2.redshift.amazonaws.com:5439/dev"
// 	port := "5439"
// 	dbname := "dev"
// 	db, err := MakeRedshfitConnection(username, password, host, port, dbname)
// 	if err != nil {
// 		log.Fatal(err)
// 	}
// 	var (
// 		daterep string
// 	)
// 	rows, err := db.Query("SELECT daterep FROM 'dev'.'public'.'newr'")
// 	if err != nil {
// 		log.Fatal(err)
// 	}
// 	defer rows.Close()
// 	for rows.Next() {
// 		err := rows.Scan(&daterep)
// 		if err != nil {
// 			log.Fatal(err)
// 		}
// 		fmt.Println(daterep)
// 	}
// 	err = rows.Err()
// 	if err != nil {
// 		log.Fatal(err)
// 	}

// 	defer db.Close()
// }

// // package main

// // import (

// //     "database/sql"

// //     "log"

// //     _ "github.com/lib/pq"
// //  )

// //User appropriate
// type User struct {
// 	Name string `sql:"username"`
// }

// func main() {

// 	db, err := sql.Open("postgres", "postgres://user:pass@host:port/dbname")

// 	if err != nil {

// 		log.Fatalln("to connect", err)

// 	}

// 	defer db.Close()

// 	row, err := db.Query("SELECT username FROM users WHERE username LIKE $1 LIMIT $2", "otiai%", 10)

// 	if err != nil {

// 		log.Fatalln("to query", err)

// 	}

// 	for row.Next() { //line is up to True

// 		user := new(User)

// 		err := row.Scan(&user.Name)

// 		if err != nil {

// 			log.Fatalln("to scan the results", err)

// 		}

// 		log.Printf("%+v\n", user)

// 	}

// 	if err := row.Err(); err != nil {

// 		log.Fatalln("in iteration", err)

// 	}
// }
