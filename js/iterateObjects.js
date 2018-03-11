this.name = {
    'shank': 'kesh',
    'chintu': 'jai'
}

function has(key) {
    return (key in this.name)
}

console.log(has.call(this,'chintu'));