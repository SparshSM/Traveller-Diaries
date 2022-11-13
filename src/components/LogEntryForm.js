import React,{useState} from 'react'
// import "../CSS/LogEntry.css"
import ReactStars from "react-rating-stars-component";
import { useForm } from "react-hook-form";
import { createLogEntry } from '../APIs/logAPI';
function LogEntryForm({location,onClose}) {
  const [loading,setLoading] =useState(false);
  const [error,setError] =useState("");
  const { register, handleSubmit } = useForm();
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
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

   <form onSubmit={handleSubmit(onSubmit)}>
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
    <label htmlFor="image" className="form-label">Image</label>
    <input type="file" className="form-control" {...register("image")} id="image" aria-describedby="image" />
  </div>
  <div className="mb-3 col-md-12">
    <label htmlFor="visitedOn" className="form-label">Visited On</label>
    <input type="date" className="form-control" required {...register("visitedOn")} id="visitedOn" aria-describedby="visitedOn" />
  </div>
  <div className="rate">
    <label htmlFor="visitedOn" className="form-label">Rating</label>
  <ReactStars
   {...register("rating")}
   count={5}
   onChange={ratingChanged}
   size={24}
   activeColor="#ffd700"
   />,
  </div>
  <button type="submit" disabled={loading} className="btn btn-primary">{loading ? "Loading...":"Submit"}</button>
</form>
   </div>
   </>
  )
}

export default LogEntryForm