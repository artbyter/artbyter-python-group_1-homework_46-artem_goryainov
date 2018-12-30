Duck={
    name:'Дональд',
    color:'белый',
    old:1,
    toStr:function () {
        return this.name+', '+this.color+', '+this.old + ' год';
    },
    say:function () {
        return 'кря, кря'
    }
    
}

console.log(Duck.toStr())
console.log(Duck.say())