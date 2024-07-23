import Button from "../components/button"
import LoaderButton from "../components/loaderButton"




const Landing = () => {
    return (
        <div className="flex flex-col items-center justify-center m-5 bg-gray-100">
            <h1>Welcome</h1>
            <p>Hello world</p>
            <Button/>
            <div className="p-4">
            <LoaderButton className="text-white">Let's chat</LoaderButton>
            </div>
           
        </div>
    )
}

export default Landing