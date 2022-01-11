package main

import (
	"fmt"
	"log"

	"github.com/cevaris/ordered_map"
)

// func homeLink(w http.ResponseWriter, r *http.Request) {
// 	fmt.Fprintf(w, "Welcome home!")

// }

func main() {
	// router := mux.NewRouter().StrictSlash(true)
	// router.HandleFunc("/", homeLink)
	// log.Fatal(http.ListenAndServe(":8080", router))

	sql_statements := ordered_map.NewOrderedMap()
	sql_statements.Set("CREATE", "CREATE TABLE IF NOT EXISTS public.region (\n"+
		"  R_REGIONKEY bigint NOT NULL,\n"+
		"  R_NAME varchar(25),\n"+"  R_COMMENT varchar(152))\n"+"diststyle all;")
	// sql_statements.Set("COPY", "COPY region FROM 's3://redshift-immersionday-labs/data/region/region.tbl.lzo'\n"+
	// 	"iam_role '"+redshift_iam_role+"' \n"+"region 'us-west-2' lzop delimiter '|' COMPUPDATE PRESET;")
	sql_statements.Set("UPDATE", "UPDATE public.region SET r_regionkey= 5 WHERE r_name ='AFRICA';")
	sql_statements.Set("DELETE", "DELETE FROM public.region where r_name = 'MIDDLE EAST';")
	sql_statements.Set("SELECT", "SELECT r_regionkey, r_name FROM public.region;")
	log.Print("Running sql queries in ", " mode!")

	// Iterating over ordered map to execute each sql statement
	iter := sql_statements.IterFunc()
	for kv, ok := iter(); ok; kv, ok = iter() {
		command := kv.Key.(string)
		query := kv.Value.(string)
		// log.Print("Example of ", command, ":")
		// log.Print("Running Query ", query)
		fmt.Println(command, query)
	}

}
