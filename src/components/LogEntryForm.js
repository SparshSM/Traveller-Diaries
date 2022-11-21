import React,{useState} from 'react'
import "../CSS/LogEntry.css"
import { useForm } from "react-hook-form";
import { createLogEntry } from '../APIs/logAPI';
function LogEntryForm({location,onClose}) {
  const [loading,setLoading] =useState(false);
  const [error,setError] =useState("");
  const { register, handleSubmit } = useForm();
  let star = document.querySelectorAll('input');
let showValue = document.querySelector('#rating-value');
    showValue ={...register("rating")}
for (let i = 0; i < star.length; i++) {
	star[i].addEventListener('click', function() {
		i = this.value;
	});
}
  const onSubmit = async(data) => {
    try {
      data.longitude = location.longitude;
      data.latitude = location.latitude;
      const created = await createLogEntry(data)
      console.log(created);
      onClose();
    } catch (error) {
      setError(error.message)
      console.log(error)
      setLoading(false)
    }};
  return (
   <>
    <div className="container-fluid">

   <form onSubmit={handleSubmit(onSubmit)} style={{color:"black"}}>
    {error ? <h4>{error}</h4>:null}
  <div className="form-group col-md-12">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" {...register("title")} required id="title" aria-describedby="title" />
  </div> 
  <div className="mb-3 col-md-12">
    <label htmlFor="desc" className="form-label">Description</label>
    <textarea name="desc" required id="desc" cols="52" rows="3" {...register("description")}></textarea>
  </div>
  <div className="mb-3 col-md-12">
    <label htmlFor="comments" className="form-label">Comments</label>
    <textarea name="comments" required id="comments" cols="52" {...register("comments")} rows="3"></textarea>
  </div>
  <div className="mb-3 col-md-12">
    <label htmlFor="image" className="form-label">Image Link</label>
    <input type="text" className="form-control" {...register("images")} id="image" aria-describedby="image" />
  </div>
  <div className="mb-3 col-md-12">
    <label htmlFor="visitedOn" className="form-label">Visited On</label>
    <input type="date" className="form-control" required {...register("visitedOn")} id="visitedOn" aria-describedby="visitedOn" />
  </div>
			<span>Star Rating</span>
		<div class="rating-wrap">
				<fieldset class="rating">
					<input type="radio" {...register("rating")} id="star5" name="rating" value="5"/><label for="star5" class="full" title="Awesome"></label>
					<input type="radio" {...register("rating")} id="star4.5" name="rating" value="4.5"/><label for="star4.5" class="half"></label>
					<input type="radio" {...register("rating")} id="star4" name="rating" value="4"/><label for="star4" class="full"></label>
					<input type="radio" {...register("rating")} id="star3.5" name="rating" value="3.5"/><label for="star3.5" class="half"></label>
					<input type="radio" {...register("rating")} id="star3" name="rating" value="3"/><label for="star3" class="full"></label>
					<input type="radio" {...register("rating")} id="star2.5" name="rating" value="2.5"/><label for="star2.5" class="half"></label>
					<input type="radio" {...register("rating")} id="star2" name="rating" value="2"/><label for="star2" class="full"></label>
					<input type="radio" {...register("rating")} id="star1.5" name="rating" value="1.5"/><label for="star1.5" class="half"></label>
					<input type="radio" {...register("rating")} id="star1" name="rating" value="1"/><label for="star1" class="full"></label>
					<input type="radio" {...register("rating")} id="star0.5" name="rating" value="0.5"/><label for="star0.5" class="half"></label>
				</fieldset> <br /> <br />
				</div>
  <button type="submit" disabled={loading} className="btn btn-primary">{loading ? "Loading...":"Submit"}</button>
</form>
   </div>
   </>
  )
}

export default LogEntryForm