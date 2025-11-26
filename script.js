// small helpers: mobile nav toggle + year
document.addEventListener('DOMContentLoaded',function(){
  const toggle = document.getElementById('nav-toggle')
  const nav = document.getElementById('nav')
  if(toggle && nav){
    toggle.addEventListener('click',()=>{
      if(nav.style.display === 'flex') nav.style.display = 'none'
      else nav.style.display = 'flex'
      nav.style.flexDirection = 'column'
      nav.style.gap = '10px'
      nav.style.background = 'rgba(0,0,0,0.12)'
      nav.style.padding = '10px'
      nav.style.position = 'absolute'
      nav.style.right = '16px'
      nav.style.top = '60px'
      nav.style.borderRadius = '8px'
    })
  }
  const y = document.getElementById('year')
  if(y) y.textContent = new Date().getFullYear()
})
