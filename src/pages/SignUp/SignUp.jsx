import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SignUpForm from "../../components/SignUpForm";

export default function SignUp() {
  return (<>
    <Header />
    <div className="m-auto">
      <SignUpForm />
    </div>
    <Footer />
  </>);
}