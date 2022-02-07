import { useState, useContext, useEffect } from "react";
import Swal from "sweetalert2";

import { ProductContext } from "./ProductContext";
import { requests } from "../../config/requests";
import { AuthContext } from "../auth/AuthContext";
import { AlertContext } from "../alerts/AlertContext";

const ProductState = ({ children }) => {

    const { logged } = useContext(AuthContext);
    const { showAlert } = useContext(AlertContext);
    const [product, setProduct] = useState({});
    const [shoppingCart, setShoppingCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [topProducts, setTopProducts] = useState([]);
    const [topCategories, setTopCategories] = useState([]);
    const [otherProducts, setOtherProducts] = useState([]);
    const [slider, setSlider] = useState([]);

    const [total, setTotal] = useState(0);
    useEffect(() => {
        let total = 0;
        shoppingCart.forEach(i => {
            total += i.product.price * i.quantity + 1
        });
        setTotal(total);
    }, [shoppingCart]);

    const loadCategory = async () => {
        try {
            const resp = await requests('/category/', 'GET');

            resp
                ?
                setTopCategories(resp)
                :
                setTopCategories([])
                ;
        } catch (err) {
            console.log(err);
        }
    }

    const otherProductsR = async () => {
        try {
            const resp = await requests('/product/', 'GET');

            resp
                ?
                setOtherProducts(resp)
                :
                setOtherProducts([]);

        } catch (err) {
            console.log(err);
        }
    }

    const loadSlider = async () => {
        try {
            const resp = await requests('/slider/', 'GET');

            resp
                ?
                setSlider(resp)
                :
                setSlider([])
                ;
        } catch (err) {
            console.log(err);
        }
    }

    const addToCart = async (id, quantity) => {
        let body;
        if (quantity) {
            body = {
                id,
                quantity
            };
        } else {
            body = { id, }
        }
        try {
            if (logged) {
                const resp = await requests('/cart-detail/', 'POST', body,
                    { 'Authorization': `Token ${localStorage["token"]}` }
                );

                if (resp.id) {
                    setShoppingCart(c => [...c, resp]);
                    showAlert('Se agregó correctamente', 'alert-success')
                } else
                    showAlert('Error al agregar', 'alert-danger');
            } else {
                showAlert('Inicia sesión con tu cuenta. Gracias :)', 'alert-danger');
            }
        } catch (err) {
            console.log(err);
        }
    }

    const deleteFromCart = async (id) => {
        const result = await Swal.fire({
            title: "¿Deseas eliminarlo del carrito de compras?",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            icon: 'question',
            confirmButtonText: "Sí",
        });

        if (result.isConfirmed) {
            try {
                const resp = await requests('/cart-detail/' + id, 'DELETE', {},
                    { 'Authorization': `Token ${localStorage["token"]}` }
                );

                if (resp.ok) {
                    showAlert('Eliminado correctamente', 'alert-secondary')
                    setShoppingCart(c => [...c].filter(c => c.id !== id));
                } else {
                    showAlert('Error al eliminar', 'alert-danger');
                }
            } catch (err) {
                console.log(err);
            }
        }
    }

    const loadCart = async () => {
        if (logged) {
            try {
                const resp = await requests('/cart-detail/', 'GET', {},
                    { 'Authorization': `Token ${localStorage["token"]}` }
                );

                resp.items
                    ?
                    setShoppingCart(resp.items)
                    :
                    setShoppingCart([]);
            } catch (err) {
                console.log(err);
            }
        }

    }

    const updateCart = async (id, action) => {
        try {
            const resp = await requests('/cart-detail/', 'PUT', { id, action },
                { 'Authorization': `Token ${localStorage["token"]}` }
            );

            if (resp.ok) {
                const item = shoppingCart.find(c => c.id === id);
                action === '0' ? (item.quantity = item.quantity + 1) : (item.quantity = item.quantity - 1);
                const all = shoppingCart.filter(c => c.id !== id);
                setShoppingCart([item, ...all]);
                showAlert('Modificado :)', 'alert-success')
            } else {
                showAlert('No se logró modificar', 'alert-danger');
                return false;
            }
        } catch (err) {
            console.log(err);
        }
        return true;
    }

    const loadWishlist = async () => {
        if (logged) {
            try {
                const resp = await requests('/wishlist/', 'GET', {},
                    { 'Authorization': `Token ${localStorage["token"]}` }
                );

                resp.items
                    ?
                    setWishlist(resp.items)
                    :
                    setWishlist([]);
            } catch (err) {
                console.log(err);
            }
        }

    }

    const deleteWishlist = async (id) => {
        const result = await Swal.fire({
            title: "¿Deseas eliminarlo de tu lista de deseos?",
            icon: 'question',
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonText: "Sí",
        });

        if (result.isConfirmed) {
            try {
                const resp = await requests('/wishlist/' + id, 'DELETE', {},
                    { 'Authorization': `Token ${localStorage["token"]}` }
                );

                if (resp.ok) {
                    showAlert('Eliminado correctamente', 'alert-secondary')
                    setWishlist(c => [...c].filter(c => c.id !== id));
                } else {
                    showAlert('Error al eliminar', 'alert-danger');
                }
            } catch (err) {
                console.log(err);
            }
        }
    }

    const addWishlist = async (id) => {
        try {
            if (logged) {
                const resp = await requests('/wishlist/', 'POST', { id: id, },
                    { 'Authorization': `Token ${localStorage["token"]}` }
                );

                if (resp.id) {
                    setWishlist(c => [...c, resp]);
                    showAlert('Se añadió a favoritos :)', 'alert-success')
                } else
                    showAlert('Error al añadir', 'alert-danger');
            } else {
                showAlert('Inicia sesión con tu cuenta. Gracias :)', 'alert-danger');
            }
        } catch (err) {
            console.log(err);
        }
    }

    const loadProduct = async (slug) => {
        try {
            const resp = await requests('/product-detail/' + slug, 'GET');

            resp
                ?
                setProduct(resp)
                :
                setProduct([])
                ;
        } catch (err) {
            console.log(err);
        }
    }

    const makePayment = async (data) => {
        try {
            if (logged) {
                const resp = await requests('/payment/', 'POST', data,
                    { 'Authorization': `Token ${localStorage["token"]}` }
                );

                if (resp.id) {
                    Swal.fire({
                        icon: 'success',
                        title: '¡Pago exisotoso!',
                        text: 'El pago de tus productos se ha hecho sin problemas ;)',
                        html: '<div><p>En tu pedido se ha guardado la confirmación del pago</p>' +
                            `<p>Tu ID de pago es: ${data.charge_id} </p>`,
                    });
                    setShoppingCart([]);
                } else
                Swal.fire({
                    icon: 'error',
                    title: 'Error al registrar pago en el sistema',
                    text: 'Guarda el ID de tu pago y comunícate a wstore@contact.com',
                    html: `<p>Tu ID de pago es: ${data.orderId} </p></div>`
                });
            } else {
                showAlert('Inicia sesión con tu cuenta. Gracias :)', 'alert-danger');
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <ProductContext.Provider
            value={{
                shoppingCart,
                wishlist,
                topProducts,
                topCategories,
                otherProducts,
                otherProductsR,
                loadCategory,
                topCategories,
                loadSlider,
                slider,
                addToCart,
                loadCart,
                deleteFromCart,
                loadWishlist,
                deleteWishlist,
                addWishlist,
                updateCart,
                total,
                loadProduct,
                product,
                makePayment,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

export default ProductState;