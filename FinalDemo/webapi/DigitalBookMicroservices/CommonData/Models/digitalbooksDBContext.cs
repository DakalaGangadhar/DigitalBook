using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace CommonData.Models
{
    public partial class digitalbooksDBContext : DbContext
    {
        public digitalbooksDBContext()
        {
        }

        public digitalbooksDBContext(DbContextOptions<digitalbooksDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Authorlogin> Authorlogins { get; set; }
        public virtual DbSet<Book> Books { get; set; }
        public virtual DbSet<Bookcategory> Bookcategories { get; set; }
        public virtual DbSet<Cardtype> Cardtypes { get; set; }
        public virtual DbSet<Orderbook> Orderbooks { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
//            if (!optionsBuilder.IsConfigured)
//            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
//                optionsBuilder.UseSqlServer("Data Source=CTSDOTNET854;Initial Catalog=digitalbooksDB;User ID=sa;Password=pass@word1");
//            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Authorlogin>(entity =>
            {
                entity.ToTable("authorlogin");
            });

            modelBuilder.Entity<Book>(entity =>
            {
                entity.ToTable("book");

                entity.Property(e => e.Active).HasColumnName("active");

                entity.Property(e => e.Author).HasColumnName("author");

                entity.Property(e => e.Authorid).HasColumnName("authorid");

                entity.Property(e => e.Authormail).HasColumnName("authormail");

                entity.Property(e => e.Categoryid).HasColumnName("categoryid");

                entity.Property(e => e.Contentdata).HasColumnName("contentdata");

                entity.Property(e => e.Image).HasColumnName("image");

                entity.Property(e => e.Price)
                    .HasColumnType("decimal(18, 2)")
                    .HasColumnName("price");

                entity.Property(e => e.Publisher).HasColumnName("publisher");

                entity.Property(e => e.Releasedate)
                    .HasColumnType("datetime")
                    .HasColumnName("releasedate");

                entity.Property(e => e.Title).HasColumnName("title");
            });

            modelBuilder.Entity<Bookcategory>(entity =>
            {
                entity.HasKey(e => e.CategoryId);

                entity.ToTable("bookcategory");
            });

            modelBuilder.Entity<Cardtype>(entity =>
            {
                entity.ToTable("cardtype");
            });

            modelBuilder.Entity<Orderbook>(entity =>
            {
                entity.HasKey(e => e.OrderId);

                entity.ToTable("orderbook");

                entity.Property(e => e.Cvv).HasColumnName("CVV");

                entity.Property(e => e.Invoiceflag).HasColumnName("invoiceflag");

                entity.Property(e => e.Userid).HasColumnName("userid");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("user");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password");

                entity.Property(e => e.Username)
                    .IsRequired()
                    .IsUnicode(false)
                    .HasColumnName("username");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
