import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
//import * as tf from "@tensorflow/tfjs";
import * as posenet from '@tensorflow-models/posenet';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, private camera: Camera) {
    
    this.analysis();

  }

  analysis() {

    posenet.load().then(function(net) {

    // Input image element — An html element that contains an image to predict poses for, such as a video or image tag. Importantly, the image or video element fed in should be square.
    // Image scale factor — A number between 0.2 and 1. Defaults to 0.50. What to scale the image by before feeding it through the network. Set this number lower to scale down the image and increase the speed when feeding through the network at the cost of accuracy.
    // Flip horizontal — Defaults to false. If the poses should be flipped/mirrored horizontally. This should be set to true for videos where the video is by default flipped horizontally (i.e. a webcam), and you want the poses to be returned in the proper orientation.
    // Output stride — Must be 32, 16, or 8. Defaults to 16. Internally, this parameter affects the height and width of the layers in the neural network. At a high level, it affects the accuracy and speed of the pose estimation. The lower the value of the output stride the higher the accuracy but slower the speed, the higher the value the faster the speed but lower the accuracy. 

      var imageScaleFactor = 0.50;
      var flipHorizontal = false;
      var outputStride = 16;
      
      var img : HTMLImageElement;
      img = new Image();
      img.src = "assets/imgs/bolt.jpg";
      


      console.log("Carregou", net);
      var pose = net.estimateSinglePose(img, imageScaleFactor, flipHorizontal);
      console.log("Pose", pose);

    });


  }


}
