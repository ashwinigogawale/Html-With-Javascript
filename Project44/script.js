const range = document.getElementById('range')

range.addEventListener('input', (e) => {
    const value =+e.target.value
    const lable =e.target.nextElementSibling
const range_width = getComputedStyle(e.target).getPropertyValue('width')
const lable_width = getComputedStyle(lable).getPropertyValue('width')

const num_width =+range_width.substring(0,range_width.length - 2)
const num_lable_width =+lable_width.substring(0,lable_width.length - 2)

const max =+e.target.max
const min =+e.target.min

const left = value * (num_width / max) - num_lable_width / 2 + scale(value,min,max,10,-10)
lable.style.left = `${left}px`
    lable.innerHTML = value
})
const scale = (num,in_min,in_max,out_min,out_max) => {
    return(num-in_min) * (out_max-out_min) / (in_max-in_min) + out_min;
}