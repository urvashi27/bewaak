<template>
<form class="justify-content-center" @submit.prevent="SubmitForm()" id="form-f">
    <div class="w-100">
        <h2>Feedback Form</h2>
        <div class="row">
            <div class="col-md-12">
                <label class="input1" for="select">Feedback Type <span class="text-danger">*</span></label>
                <select id="select" placeholder="Select Your Answer" v-model="feedbackForm.feedbacktype">
                    <option>Feedback</option>
                    <option>Request</option>
                    <option>Concerns</option>
                    <option>Suggestion</option>
                </select>
            </div>
            <div class="col-md-12" id="submit2">
                <div class="submit2">
                    <label class="input1" for="comments">Feedback</label>
                    <textarea class="form-control" placeholder="Leave your feedback here..." v-model="feedbackForm.feedback"></textarea>
                </div>
            </div>
            <br />
            <div class="text-center">
                <button type="submit" class="custom-btn btn-7 text-center">
                    <span>Submit</span>
                </button>
            </div>
        </div>
    </div>
</form>
</template>

  
<script>
import FeedbackService from "@/services/FeedbackService";
import swal from 'sweetalert';
export default {
    name: "FeedbackForm",

    data() {
        return {
            user: JSON.parse(localStorage.getItem('users')),
            feedbackForm: {
                feedbacktype: '',
                feedback: ''
            },
        };
    },

    methods: {
        SubmitForm() {
            var data = {
                ggid: this.user.ggid,
                username: this.user.userName,
                feedbacktype: this.feedbackForm.feedbacktype,
                feedback: this.feedbackForm.feedback
            };

            FeedbackService.create(data)
                .then((response) => {
                    this.feedbackForm.ggid = response.data.id;
                    swal({
                        title: "Form Submitted!",
                        icon: "success",
                        button: "ok",
                        customClass: 'swal-wide'
                    });

                })

                .catch((e) => {
                    alert(e);
                });

        },
    },
};
</script>
  
<style>
@import url(@/styles/style.css);
</style>
