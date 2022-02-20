import { getDateFrom } from "../../../utils/converter";
import UnitProduct from "./UnitProduct";

const ItemShopping = ({ order }) => {
    return (
        <tr>
            <td>
                {
                    order?.products?.map((item) => <UnitProduct
                        key={item.id}
                        item={item}
                    />)
                }
            </td>

            <td>

                <ul className="timeline">
                    <li className={order?.reviewed ? 'success' : 'process'}>
                        <h5>{order?.reviewed_date ? getDateFrom(order?.reviewed_date) : "Se está procesando tu solicitud"}</h5>
                        {
                            order?.reviewed
                                ?
                                <p className="text-success">Revisado <i className="fas fa-check"></i></p>
                                :
                                <p className="text-danger">Revisado <i className="fas fa-times"></i></p>
                        }
                    </li>

                    <li className={order?.sent ? 'success' : 'process'}>
                        {<h5>{order?.sent_date ? getDateFrom(order?.sent_date) : "Aún no se ha enviado"}</h5>}
                        {
                            order?.reviewed
                                ?
                                order?.sent
                                    ?
                                    <p className="text-success">Enviado <i className="fas fa-check"></i></p>
                                    :
                                    <>
                                        <p className="text-danger">Entregado <i className="fas fa-times"></i></p>
                                        <button className="btn btn-primary" disabled>
                                            <span className="spinner-border spinner-border-sm"></span>
                                            En proceso
                                        </button>
                                    </>
                                :
                                <button className="btn btn-primary" disabled>
                                    <span className="spinner-border spinner-border-sm"></span>
                                    En proceso
                                </button>
                        }
                    </li>

                    <li className={order?.delivered ? 'success' : 'process'}>
                        <h5>{order?.delivered_date ? getDateFrom(order?.delivered_date) : 'Aún no se te ha entregado'}</h5>
                        {
                            order?.sent
                                ?
                                order?.delivered
                                    ?
                                    <p className="text-success">Entregado <i className="fas fa-check"></i></p>
                                    :
                                    <>
                                        <p className="text-danger">Entregado <i className="fas fa-times"></i></p>
                                        <button className="btn btn-primary" disabled>
                                            <span className="spinner-border spinner-border-sm"></span>
                                            En proceso
                                        </button>
                                    </>
                                :
                                <button className="btn btn-primary" disabled>
                                    <span className="spinner-border spinner-border-sm"></span>
                                    En proceso
                                </button>
                        }

                    </li>
                </ul>

            </td>

            <td className="price text-center">$ {order?.total}</td>

        </tr>
    );
};

export default ItemShopping;