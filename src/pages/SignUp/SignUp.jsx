import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SignUpForm from "../../components/SignUpForm";

export default function SignUp() {
  return (<>
    <Header />
    <div className="grid grid-cols-1 place-items-center">
      <SignUpForm />
    </div>
    <Footer />
  </>);
}