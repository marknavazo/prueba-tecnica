import { NgModule }      from '@angular/core';

export class Album{
	constructor(
		public userId:number,
		public id:number,
		public title:string
		){}
}