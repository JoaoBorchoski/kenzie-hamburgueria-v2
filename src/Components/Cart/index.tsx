export const EmptyCart = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
                marginTop: "64px",
            }}
        >
            <h2>Sua sacola está vazia </h2>
            <p>Adicione itens</p>
        </div>
    );
}

