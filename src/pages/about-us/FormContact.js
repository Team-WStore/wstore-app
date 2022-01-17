const FormContact = () => {

    return(
        <div className="ps-section--gray">
            <div className="container">
            <h4 className="mb-3">Contactanos</h4>
                <form className="needs-validation" novalidate>
                <div class="row g-3">
                    <div className="col-sm-6">
                    <label for="firstName" className="form-label">Nombres</label>
                    <input type="text" className="form-control" id="firstName" placeholder="" value="" required></input>
                    <div class="invalid-feedback">
                        Es requerido el nombre.
                    </div>
                    </div>

                    <div className="col-sm-6">
                    <label for="lastName" className="form-label">Apellidos</label>
                    <input type="text" className="form-control" id="lastName" placeholder="" value="" required></input>
                    <div className="invalid-feedback">
                        Es requerido el apellido.
                    </div>
                    </div>

                    <div className="col-12">
                    <label for="email" class="form-label">Correo electronico<span class="text-muted">(Optional)</span></label>
                    <input type="email" class="form-control" id="email" placeholder="you@example.com"></input>
                    <div class="invalid-feedback">
                        Por favor un correo electronico valido para entregar futura información.
                    </div>
                    </div>
                
            

                    <div className="col-md-8">
                    <label for="country" class="form-label">Selecciona tu petición</label>
                    <select className="form-select" id="country" required>
                        <option value="">¿Deseas?</option>
                        <option>Consultar con proveedores</option>
                        <option>Presentar Quejas</option>
                        <option>Mandar recomendaciones</option>
                    </select>
                    <div className="invalid-feedback">
                        Por favor seleccionar una acción.
                    </div>
                    </div>

                    <div class="col-12">
                    <label for="address2" className="form-label">Describenos tu duda</label>
                    <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"></input>
                    </div>

                
                
                <hr className="my-4"></hr>

                <small className="text-muted">Estaremos en contacto contigo una vez sea revisada tu petición, por lo cual enviaremos un correo de respuesta.</small>

                <hr className="my-4"></hr>
                    
                <button className="w-100 btn btn-primary btn-lg" type="submit">Enviar</button>
                </div>
                </form>
                
            </div>
        </div>
    );
}
export default FormContact;