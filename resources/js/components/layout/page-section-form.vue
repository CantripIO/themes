<template>
    <div class="page-section page-section-form">
        <div class="alert alert-success">
            Thank you, your submission has been sent!
        </div>
        <div class="alert alert-danger">
            Error, please fill out all required fields
        </div>
        <div class="page-section-form-content">
            <div class="form">
                <div class="form-field">
                    <label class="form-field-label">First Name<span>*</span></label>
                    <div class="form-field-input-container">
                        <input type="text" required="required" class="form-field-input form-field-input-text">
                    </div>
                </div>
                <div class="form-field">
                    <label class="form-field-label">Last Name<span>*</span></label>
                    <div class="form-field-input-container">
                        <input type="text" required="required" class="form-field-input form-field-input-text">
                    </div>
                </div>
                <div class="form-field">
                    <label class="form-field-label">Email<span>*</span></label>
                    <div class="form-field-input-container">
                        <input type="text" required="required" class="form-field-input form-field-input-text">
                    </div>
                </div>
                <div class="form-field">
                    <label class="form-field-label">Subject</label>
                    <div class="form-field-input-container">
                        <select class="form-field-input form-field-input-select">
                            <option value="">--</option>
                            <option value="tech">Tech Support</option>
                            <option value="sales">Sales</option>
                        </select>
                    </div>
                </div>
                <div class="form-field">
                    <label class="form-field-label">Thoughts on your last adventure</label>
                    <div class="form-field-input-container">
                        <div class="form-field-radio-group">
                            <div class="form-field-radio">
                                <input class="form-field-radio-input" type="radio" value="love">
                                <label class="form-field-radio-label">It was great</label>
                            </div>
                            <div class="form-field-radio">
                                <input class="form-field-radio-input" type="radio" value="love">
                                <label class="form-field-radio-label">It was terrible</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-field">
                    <label class="form-field-label">Newsletter</label>
                    <div class="form-field-input-container">
                        <div class="form-field-checkbox-group">
                            <div class="form-field-checkbox">
                                <input class="form-field-checkbox-input" type="checkbox" value="1">
                                <label class="form-field-checkbox-label">Add me to the newsletter</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-field">
                    <label class="form-field-label">Message<span>*</span></label>
                    <div class="form-field-input-container">
                        <textarea type="text" required="required" rows="5" class="form-field-input form-field-input-textarea"></textarea>
                    </div>
                </div>
                <div class="form-actions">
                    <button type="button" class="button button-primary">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>