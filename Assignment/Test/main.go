package main

import (
	"fmt"
	"math/rand"
	"time"
)

func getRandomDate(Max int, Min int) string {
	min := time.Date(Max, 1, 0, 0, 0, 0, 0, time.UTC).Unix()
	max := time.Date(Min, 1, 0, 0, 0, 0, 0, time.UTC).Unix()
	delta := max - min

	sec := rand.Int63n(delta) + min
	date := time.Unix(sec, 0)
	// res1 := strings.Split(date.String(), " ")
	res := date.Format("2006-01-02")
	return res
}
func main() {
	fmt.Println(getRandomDate(getRandomInt(), getRandomInt()))
}

//genreate random date return int value
func getRandomInt() int {
	rand.Seed(time.Now().Unix())
	min := 1
	max := 61900
	no := rand.Intn(max-min) + min
	return no
}
