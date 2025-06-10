export default function Footer() {
  return (
    <footer className="py-8 text-center text-gray-500 border-t mt-12 bg-indigo-50">
      <p className="text-sm">&copy; {new Date().getFullYear()} Kiteflyer. All rights reserved.</p>
      <div className="mt-4 flex justify-center gap-4">
        <a href="#" className="text-indigo-600 hover:text-indigo-800">Privacy Policy</a>
        <a href="#" className="text-indigo-600 hover:text-indigo-800">Terms of Service</a>
        <a href="#" className="text-indigo-600 hover:text-indigo-800">Contact Us</a>
      </div>
    </footer>
  );
}
