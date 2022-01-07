import (
	"fmt"
	"context"
	"log"
	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/s3"
	"math"
	"math/rand"
	"time"

)
func getRandomInt() {
	max:=61900
	min:=1
	return String(math.floor(rand.Intn(max - min) + min ));
  }

  func randomDate(start, end) {
	     tm := time.Date(2020, time.April,
        11, 21, 34, 01, 0, time.UTC)
	return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString('en-US');
  }
  
  
func main(){
	cfg, err := config.LoadDefaultConfig(context.TODO())
	if err != nil {
		log.Fatal(err)
	}

	// Create an Amazon S3 service client
	exports.handler = event => {
		queryMyThings()
	  
	  }
	client := s3.NewFromConfig(cfg)

}