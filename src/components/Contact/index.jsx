function Contact() {
  return (
    <>
      <div className="container mt-5 pt-3">
        <div className="row justify-content-center">
          <forum className="fourm col-12 col-lg-6 border rounded">
            <p className="pt-1">Required *</p>
            <div className="row">
              <div className="mb-1 col-6">
                <label
                  for="exampleFormControlInput1"
                  className="form-label"
                ></label>
                <input
                  type="name"
                  required="true"
                  className="form-control"
                  id="firstName"
                  placeholder="First Name *"
                />
              </div>
              <div className="mb-1 col-6">
                <label
                  for="exampleFormControlInput1"
                  className="form-label"
                ></label>
                <input
                  required="true"
                  type="name"
                  className="form-control"
                  id="lastName"
                  placeholder="Last Name *"
                />
              </div>
            </div>
            <div className="row">
              <div className="mb-1 col-6">
                <label
                  for="exampleFormControlInput1"
                  className="form-label"
                ></label>
                <input
                  type="tel"
                  required="true"
                  className="form-control"
                  id="phone"
                  placeholder="Phone Number *"
                />
              </div>
              <div className="mb-1 col-6">
                <label
                  for="exampleFormControlInput1"
                  className="form-label"
                ></label>
                <input
                  type="email"
                  required="true"
                  className="form-control"
                  id="email"
                  placeholder="Email *"
                />
              </div>
              </div>
              <div className="row">
              <div className="mb-1 col-6">
                <label
                  for="exampleFormControlInput1"
                  className="form-label"
                ></label>
                <input
                  type="text" 
                  pattern="[0-9]{5}"
                  required="true"
                  className="form-control"
                  id="company"
                  placeholder="Filming Zipcode *"
                />
              </div>
              <div className="mb-1 col-6">
                <label
                  for="exampleFormControlInput1"
                  className="form-label"
                ></label>
                <input
                  type="name"
                  required="false"
                  className="form-control"
                  id="company"
                  placeholder="Company Name (if applicable)"
                />
              </div>
            </div>
            <div class="mb-5">
              <label
                for="exampleFormControlTextarea1"
                class="form-label"
              ></label>
              <textarea
                class="form-control"
                required="true"
                id="description"
                rows="4"
                placeholder="Description of Requirements * - Please be as detailed and as specific as possible to ensure we match your requirements"
              ></textarea>
            </div>
          </forum>
        </div>
        <div className="row justify-content-center my-3">
          <button type="submit" class="btn btn-primary col-4">
            Get A Free Quote Today!
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;
