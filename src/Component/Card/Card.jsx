import "./Card.css";
const Card = () => {
  return (
    <>
      <section className="d-flex mt-5 flex-wrap group justify-content-center gap-3">
        <div class="card w-25">
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
              culpa!
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card w-25">
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi,
              itaque!
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card w-25">
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cupiditate sequi ad ab voluptas aliquid illum?
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card w-25">
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">Lorem ipsum dolor sit amet.</p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card w-25">
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur architecto facere beatae, quod esse necessitatibus.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export { Card };
