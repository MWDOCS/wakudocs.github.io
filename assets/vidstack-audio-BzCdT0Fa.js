import{bB as i}from"./app-Cn9KQwck.js";import{H as r,a as s}from"./vidstack-Dgd3Tj9x-KNcw23Fx.js";import"./vidstack-Ccp8mxka-Co2tc7am.js";class u extends r{constructor(t,e){super(t,e),this.$$PROVIDER_TYPE="AUDIO",i(()=>{this.airPlay=new s(this.media,e)},this.scope)}get type(){return"audio"}setup(){super.setup(),this.type==="audio"&&this.b.delegate.c("provider-setup",this)}get audio(){return this.a}}export{u as AudioProvider};