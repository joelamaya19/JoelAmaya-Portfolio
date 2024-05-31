const Contact = () => {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input type="text" className="mt-1 p-2 w-full border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" className="mt-1 p-2 w-full border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea className="mt-1 p-2 w-full border rounded"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
