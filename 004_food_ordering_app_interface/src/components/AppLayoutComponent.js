import HeaderComponent from "./HeaderComponent";
import BodyComponent from "./BodyComponent";

const AppLayoutComponent = () => {
    return (
        <div className="app">
            <HeaderComponent/>
            <BodyComponent/>
        </div>
    );
}

export default AppLayoutComponent;