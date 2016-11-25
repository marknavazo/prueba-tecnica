import { NgModule }      from '@angular/core';

export class Post{
	constructor(
		public userId:number,
		public id:number,
		public title:string,
		public body:string,
		public nicknameUser:string
		){}
}