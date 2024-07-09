import React, {useState} from "react";

const Contenedor = () => {
    const [color1, setColor1] = useState("bg-secondary");
    const [color2, setColor2] = useState("bg-secondary");
    const [color3, setColor3] = useState("bg-secondary");

    function cambiarColor1() {
        setColor1('bg-danger');
        setColor2('bg-secondary');
        setColor3('bg-secondary');
    }
    function cambiarColor2() {
        setColor1('bg-secondary');
        setColor2('bg-warning');
        setColor3('bg-secondary');
    }
    function cambiarColor3() {
        setColor1('bg-secondary');
        setColor2('bg-secondary');
        setColor3('bg-success');
    }

    // function botonCambiarColor() {
    //     if()
    //     setColor1('bg-secondary');
    //     setColor2('bg-secondary');
    //     setColor3('bg-success');
    // }

	return (
		<div className="bg-dark d-flex flex-column align-items-center align-middle py-2">
            <div onClick={cambiarColor1} className={`card rounded-circle ${color1}`} style={{height:'100px', width:'100px',marginBottom:'10px'}}></div>
            <div onClick={cambiarColor2} className={`card rounded-circle ${color2}`} style={{height:'100px', width:'100px',marginBottom:'10px'}}></div>
            <div onClick={cambiarColor3} className={`card rounded-circle ${color3}`} style={{height:'100px', width:'100px'}}></div>
            {/* <button className="btn btn-primary mt-4">Click</button>          */}
        </div>
        
	);
};

export default Contenedor;