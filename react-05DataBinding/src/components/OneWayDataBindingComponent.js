export default function OneWayDataBinding() {
    const data = {
        Type: "Electronics",
        Brand: "Samsung",
        Item: "Mobile Phone",
    };

    return (
        <>
            {Object.keys(data).map((key) => (
                <dl key={key}>
                    <dt>{key}</dt>
                    <dd>{data[key]}</dd>
                </dl>
            ))}
        </>
    );
}
