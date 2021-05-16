'use strict';
function Flower( name,category,season ){
  this.name=name;
  this.category=category;
  this.season=season;
  flowers.push( this );
}
let flowers=[];
function renderTableHeader(){
  const tableSection=document.getElementById( 'table' );
  const table=document.createElement( 'table' );
  tableSection.appendChild( table );
  const row=document.createElement( 'tr' );
  table.appendChild ( 'row' );
  const th1=document.createElement( 'th' );
  row.appendChild( th1 );
  th1.textContent='#';
  const th2=document.createElement( 'th' );
  row.appendChild( th2 );
  th2.textContent='Image';
  const th3=document.createElement( 'th' );
  row.appendChild( 'th3' );
  th3.textContent='Name';
  const th4=document.createElement( 'th' );
  row.appendChild( th4 );
  th4.textContent='Season';}

  Flower.prototype.renderFlowers(id){
      let table=document.getElementsByTagName('table')[0];
      if(!table){
renderTableHeader();
table=document.getElementsByTagName('table')[0];

      }
      const row1=document.createElement('tr');
      table.appendChild(row1);
      const td=document.createElement('td');
      row1.appendChild('td');
      td.innerHTML=`<a onclick='delete(${id})'>X</a>`;
      const td1=document.createElement('td');
      row.appendChild(td1);
      td1.textContent=this.name;
      const td2=document.createElement('td');
      row.appendChild(td2);
      td2.textContent=`<img src='./img/${this.category.toLowerCase()}.jpeg'>`;
      td3.document.createElement('td');
      row.appendChild('td3');
      td3.textContent=this.season;
  }

function renderAll
