const styles = {
    span:{
        color:'#2f2f2f'
    }
}

const Footer = () =>{
    return(
        <div>
            <p>Built and designed by <span style={styles}>Dmytro 'mercury' Gonchar</span>.
            All rights reserved. ©</p>
        </div>
    )
}
export default Footer;