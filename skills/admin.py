from django.contrib import admin
from skills.models import Skill, TrainingBit, Project

# Register your models here.
admin.site.register(TrainingBit)
admin.site.register(Skill)
admin.site.register(Project)
