# Generated by Django 3.0.2 on 2020-05-04 14:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0009_auto_20200503_2136'),
    ]

    operations = [
        migrations.CreateModel(
            name='Languages',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('language', models.CharField(default='#034FC2', max_length=20)),
            ],
        ),
        migrations.AlterField(
            model_name='usermembership',
            name='colorscheme',
            field=models.CharField(default='schemeblack', max_length=200),
        ),
        migrations.AlterField(
            model_name='usermembership',
            name='image',
            field=models.FileField(blank=True, default='photos/2020/default_wallpaper.png', null=True, upload_to='photos/%Y/%m/%d/'),
        ),
        migrations.AlterField(
            model_name='usermembership',
            name='username',
            field=models.CharField(default=' ', max_length=30),
        ),
        migrations.AlterField(
            model_name='usermembership',
            name='language',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='main.Languages'),
        ),
    ]
