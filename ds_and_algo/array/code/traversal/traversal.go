package main

import "fmt"

func main() {
	var array = []int{1, 2, 3, 4, 5, 6}
	arrayLength := len(array)
	for index := 0; index < arrayLength; index++ {
		fmt.Println(array[index])
	}
}
