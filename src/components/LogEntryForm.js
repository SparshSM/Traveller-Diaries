import React,{useState} from 'react'
import "../CSS/LogEntry.css"
import { useForm } from "react-hook-form";
import { createLogEntry } from '../APIs/logAPI';
function LogEntryForm({location,onClose}) {
  const [loading,setLoading] =useState(false);
  const [error,setError] =useState("");
  const { register, handleSubmit } = useForm();
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
   <div className="mexican-wave"></div>
   <form onSubmit={handleSubmit(onSubmit)}>
    {error ? <h4>{error}</h4>:null}
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" {...register("title")} required id="title" aria-describedby="title" />
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <textarea name="desc" required id="desc" cols="30" rows="1" {...register("description")}></textarea>
  </div>
  <div className="mb-3">
    <label htmlFor="comments" className="form-label">Comments</label>
    <textarea name="comments" required id="comments" cols="30" {...register("comments")} rows="1"></textarea>
  </div>
  <div className="mb-3">
    <label htmlFor="image" className="form-label">Image</label>
    <input type="file" className="form-control" {...register("image")} id="image" aria-describedby="image" />
  </div>
  <div className="mb-3">
    <label htmlFor="visitedOn" className="form-label">Visited On</label>
    <input type="date" className="form-control" required {...register("visitedOn")} id="visitedOn" aria-describedby="visitedOn" />
  </div>
  <div className="rate">
    <input type="radio" id="star5" {...register("star5")} name="rate" value="5" />
    <label htmlFor="star5" title="text">5 stars</label>
    <input type="radio" id="star4" {...register("star4")} name="rate" value="4" />
    <label htmlFor="star4" title="text">4 stars</label>
    <input type="radio" id="star3" {...register("star3")} name="rate" value="3" />
    <label htmlFor="star3" title="text">3 stars</label>
    <input type="radio" id="star2" {...register("star2")} name="rate" value="2" />
    <label htmlFor="star2" title="text">2 stars</label>
    <input type="radio" id="star1" {...register("star1")} name="rate" value="1" />
    <label htmlFor="star1" required title="text">1 star</label>
  </div>
  <button type="submit" disabled={loading} className="btn btn-primary">{loading ? "Loading...":"Submit"}</button>
</form>
   </>
  )
}

export default LogEntryForm